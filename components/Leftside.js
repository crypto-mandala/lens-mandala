import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { signOut, useSession } from 'next-auth/react'
import { TiTick } from 'react-icons/ti'

function Leftside() {
  const { data: session } = useSession()
  return (
    <>
      <div className="flex">
        <div className="text-lg">
          <div className="flex m-3 mt-6 ml-8 hover:bg-slate-200 px-2 py-1 rounded-full">
            <FaLeaf size={27} />
            <h3 className="ml-3"> Community 1</h3>
          </div>

          <div className="flex m-3 mt-6 ml-8 hover:bg-slate-200 px-2 py-1 rounded-full">
            <FaLeaf size={27} />
            <h3 className="ml-3"> Community 2</h3>
          </div>

          <div className="flex m-3 mt-6 ml-8 hover:bg-slate-200 px-2 py-1 rounded-full">
            <FaLeaf size={27} />
            <h3 className="ml-3"> Community 3</h3>
          </div>

          <div className="ml-8 rounded-full px-2 py-1 dropdown inline-block relative">
            <div className="flex flex-row">
              <img
                src={session?.user?.image}
                className="rounded-full w-10 h-10"
                alt=""
              />

              <h1 className="ml-3 mt-1">{session?.user?.name}</h1>

            </div>

            <div className="border-2 border-slate-100 shadow-gray-400 absolute hidden dropdown-menu bg-white rounded-2xl">
              <div className=" flex flex-row border-b-2">
                <img
                  src={session?.user?.image}
                  className="rounded-full w-10 h-10"
                  alt=""
                />
                <h1 className="ml-3 mt-1">{session?.user?.name}</h1>
                <div className="ml-5 mt-2">
                  <TiTick size={22} className="text-sky-400" />
                </div>
              </div>
              <div className="hover:bg-slate-200 rounded-br-2xl rounded-bl-2xl mt-1 cursor-pointer">
                <button onClick={signOut}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leftside
