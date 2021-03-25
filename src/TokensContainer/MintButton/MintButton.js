import React, { useState } from 'react'
import Modal from 'react-modal'
import { utils } from 'web3'
import Button from '@components/Button'
import { useContracts } from '@hooks'
import cn from 'classnames'
import s from './MintButton.module.css'

const customStyles = {
  content: {
    backgroundColor: 'var(--baby-powder)',
    bottom: 'auto',
    boxShadow: '4px 5px var(--mandarin)',
    left: '50%',
    marginRight: '-50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -100%)',
  },
}

Modal.setAppElement('#app')

const MintButton = () => {
  const {
    createPunk,
    saleStarted,
    tokenLimit,
    totalSupply,
    currentPrice,
  } = useContracts()
  const [modalOpen, setModalOpen] = useState(false)
  const [seed, setSeed] = useState(0)

  const saleEnded = tokenLimit === totalSupply

  let buttonCopy;

  if (saleStarted) {
    if (!saleEnded) {
      buttonCopy = `Mint 1 AsciiPunk for ${utils.fromWei(currentPrice, 'ether')} ETHER`
    } else {
      buttonCopy = 'All AsciiPunks have been sold out!'
    }
  } else {
    buttonCopy = "Sale hasn't started yet! Check back later."
  }

  return (
    <>
      <Button
        className={cn(s.largeButton, {
          [s.mintButton]: saleStarted,
            [s.salePausedButton]: !saleStarted
        })}
        disabled={!saleStarted || saleEnded}
        onClick={() => {
          setModalOpen(true)
        }}
      >
        {buttonCopy} 
      </Button>
      <Modal
        isOpen={modalOpen}
        style={customStyles}
        onRequestClose={() => setModalOpen(false)}
      >
        <p>What seed number would you like to use to generate your punk?</p>
        <div>
          <div className={s.row}>
            <input
              className={s.input}
              placeholder="Seed value..."
              type="number"
              value={seed}
              onChange={(e) =>
                  setSeed((x) => {
                    if (!(e.nativeEvent.data || e.target.value)) return 0

                    return parseInt(e.target.value).toString()
                  })
              }
            />
            <button
              className={s.generateButton}
              onClick={() => {
                setSeed(Math.floor(Math.random() * 1000000000000))
              }}
            >
              Generate random number
            </button>
          </div>
          <button
            className={s.submit}
            onClick={async() => {
              await createPunk(seed)
              setModalOpen(false)
            }}
          >
            Submit
          </button>
        </div>
      </Modal>
    </>
  )
}

export default MintButton
