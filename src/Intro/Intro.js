import React from 'react'
import Card from '@components/Card'
import s from './Intro.module.css'

const Intro = () => (
  <Card className={s.intro}>
    <p className={s.p}>
      AsciiPunks are an on-chain generative art project, inspired by the OG
      Crypto Punks, but with the goal of living purely on-chain.
    </p>
    <p className={s.p}>
      The AsciiPunks are little punk style characters represented as 12x12 lines
      of ASCII text. Each AsciiPunk minted is generated randomly on-chain and
      stored within the token. The token itself IS the art, and there are no
      dependencies on centralized servers or trusted services.
    </p>
    <p className={s.p}>
      Many of the NFTs out there have hardcoded references to centralized
      servers since that's where the actual artwork is stored. Not so with the
      AsciiPunks. With an AsciiPunk the token is inseparable from the artwork,
      and its value is linked intrinsically to the ethereum blockchain.
    </p>
    <p className={s.p}>
      There will only be 1024 of these little punks ever minted, so get yours
      while you can.
    </p>
    <p className={s.p}>
      AsciiPunks were crafted with love by
      {" "}<a href="https://twitter.com/nassredean" target="_blank">nassredean</a>{" "}
      and
      {" "}<a href="https://twitter.com/kyleholzinger" target="_blank">kyle</a>. AsciiPunks is not
      affiliated with Larva Labs, but we thank them for providing the crypto-art
      space so much inspiration.
    </p>
  </Card>
)

export default Intro
