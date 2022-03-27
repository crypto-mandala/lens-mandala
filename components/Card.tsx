import React from 'react'
import { Text, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import classNames from 'classnames'

import styles from './Card.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Card = ({ tokenId, imageUrl, buttonLabel, action }) => {
  const [isSending, setSending] = useState(false)

  const doAction = async (argsObj) => {
    const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
    setSending(true)
    try {
      await sleep(2000) // unnecessary delay
      await action(argsObj)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={classNames([styles.imageWrapper, 'm-4'])}>
          <img src={imageUrl} className={styles.image} alt='' />
        </div>
        <div className={styles.badgeWrapper}>
          <div
            className={classNames([
              styles.claimBadge,
              styles.badgeAnime,
              'group',
            ])}
          >
            {!isSending? (
              <button
                type="button"
                onClick={
                  () => doAction({ tokenId })
                }
                className={classNames([styles.counter, 'group-hover:text-white'])}
              >
                <Text fontSize='md'>
                  <div style={{fontWeight: 600}}>{buttonLabel}</div>
                </Text>
              </button>
            ) : (
              <Spinner size='sm' />
            )}
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div style={{fontWeight: 600}}>{`#${tokenId}`}</div>
      </div>
    </div>
  );
};

export default Card
