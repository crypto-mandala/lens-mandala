import { Wallet, Signer, ContractTransaction, ContractReceipt, getDefaultProvider, BigNumber } from 'ethers'
import { LensHub__factory } from './typechain-types'
import { CreateProfileDataStruct, ProfileStructStructOutput, PostDataStruct, PostDataStructOutput } from './typechain-types/LensHub'

const addrs = require('./addresses.json')

// TODO: test environment
const provider = getDefaultProvider('http://localhost:8545')
const adminPrivateKey = '0xd49743deccbccc5dc7baa8e69e5be03298da8688a15dd202e20f15d5e0e9a9fb'
const adminSigner = new Wallet(adminPrivateKey, provider)

const waitForTx = async (txPromise: Promise<ContractTransaction>): Promise<ContractReceipt> => {
    const tx = await txPromise
    // eslint-disable-next-line no-console
    console.log({ txHash: tx.hash })
    return await tx.wait()
}

class Lens {
    async createProfile(userSigner: Signer, profile: CreateProfileDataStruct): Promise<ProfileStructStructOutput> {
        const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], adminSigner)

        // TODO: local env only
        const isWhitelisted = await lensHub.isProfileCreatorWhitelisted(profile.to)
        if (!isWhitelisted) {
            await waitForTx(lensHub.whitelistProfileCreator(profile.to, true))
        }
        const lensHubState = await lensHub.getState()
        if (lensHubState !== 0) {
            await waitForTx(lensHub.setState(0))
        }

        const existingProfileId = await lensHub.getProfileIdByHandle(profile.handle)
        if (existingProfileId && !existingProfileId.isZero()) {
            return await lensHub.getProfile(existingProfileId)
        } else {
            await waitForTx(lensHub.connect(userSigner).createProfile(profile))
            const profileId = await lensHub.getProfileIdByHandle(profile.handle)
            return await lensHub.getProfile(profileId)
        }
    }

    async getProfileIdByHandle(handle: string): Promise<BigNumber> {
        const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], adminSigner)
        return await lensHub.getProfileIdByHandle(handle)
    }

    async post(profileId: BigNumber, userSigner: Signer, postData: PostDataStruct): Promise<PublicationStructStructOutput> {
        const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], adminSigner)
        await waitForTx(lensHub.connect(userSigner).post(postData));
        const pubCount = await lensHub.getPubCount(profileId)
        return await lensHub.getPub(profileId, pubCount.sub(BigNumber.from(1)))
    }
}

export default new Lens()
