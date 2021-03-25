import React from 'react'
import Card from '@components/Card'
import MintedTokens from './MintedTokens'
import cn from 'classnames'
import s from './Intro.module.css'

const Intro = () => (
  <>
    <Card className={s.card}>
      <h2 className={s.h2}>What are the AsciiPunks?</h2>
      <p className={s.p}>
        Basically AsciiPunks are what would happen if the CryptoPunks fell into a portal and wound up in the terminal dimension!
      </p>
    </Card>

    <MintedTokens />

    <Card className={s.card}>
      <h2 className={s.h2}>About</h2>
      <p className={s.p}>
        These little dudes are comprised of 12x12 lines of ascii text generated entirely on-chain! Thats right! When each
        little punk is minted, a generative algorithm is run to produce a random punk, which you
        can see an example of {' '}
        <a href={process.env.GENERATED_EVENT_URL} target="_blank">here</a>.{' '}
        Each punk is self contained on the ethereum blockchain. In other words, the NFT itself is the art.
      </p>
      <p className={s.p}>
        The AsciiPunks grew out of a realization that many of the NFT's we trade
        and collect today are nothing more than tokens with a hardcoded link to a
        centralized server containing metadata. With many NFT's on the market, you have to
        trust that whoever is hosting the actual image keeps their promise to host
        the artwork for the entire life of the ethereum blockchain.
      </p>

      <p className={s.p}>
        As an on-chain maximalist I find the idea of trusting centralized services to host artwork that I own entirely too custodial,
        and against the overall ethos of crypto and decentralization.
        What value can an NFT really have, so long as the token itself is not inseprable from the art in question?
        It is this question that led to the development of AsciiPunks.
      </p>

      <p className={s.p}>
        So if you are an on-chain maximalist, a decentralization junkie, or a real OG crypto head, this is the project for you.
      </p>
    </Card>
    <Card className={s.card}>
      <h2 className={s.h2}>Pricing</h2>
      <p className={s.p}>
        AsciiPunks are priced on the following curve:
        <br/>
        <br/>
        > 1 - 256: 0.05 ETH
        <br/>
        > 257 - 512: 0.1 ETH
        <br/>
        > 513 - 1024: 0.2 ETH
        <br/>
        > 1025 - 1536: 0.3 ETH
        <br/>
        > 1537 - 2048: 0.4 ETH
      </p>
    </Card>

    <Card className={s.card} id="specs">
      <h2 className={s.h2}>Specs</h2>
      <p className={s.p}>
        To get a little more technical for the folks who are interested,
        AsciiPunks is an ERC721 compatible smart contract on the ethereum
        blockchain, or in other words an "NFT".
      </p>
      <p className={s.p}>
        When a user mints an AsciiPunk a
        generative algorithm randomly produces the ascii-art representing the
        punk, and emits an event that contains it. You can see an example of {' '}
        <a href={process.env.GENERATED_EVENT_URL} target="_blank">here</a>.{' '}
      </p>
      <p className={s.p}>
        After a punk has been minted, at anytime someone can
        query the smart contract on-chain, and call "draw" with the given tokenID.
        Calling draw will return the tokens ascii art, and since the draw function
        is a view call, it doesn't cost gas to call. Thus anyone can view the art
        on chain at anytime, for free. Hence, with AsciiPunks the token is
        inseparable from the artwork, and its value is linked intrinsically to the
        ethereum blockchain. So long as the ethereum blockchain survives, so to
        will the asciipunks.
      </p>
      <p className={s.p}>
        As a sort of "fallback" mechanism, and to ensure that the AsciiPunks are easily viewable on all other NFT platforms,
        we also expose a standard ERC721-Metadata compliant `tokenURI` function. This tokenURI function returns a url to our server,
        which responds with metadata about the punk (including an svg image representing the punk). However this function is not necessary
        to view the punks on-chain.
      </p>
      <p className={s.p}>
        There will only be 2048 of these little punks ever minted, so get yours
        while you can.
      </p>
    </Card>

    <Card className={s.card}>
      <h2 className={s.h2}>FAQ</h2>

      <h3 className={s.h3}> > What is an NFT?</h3>
      <p>
        What have you been living under a rock or something? NFT stands for "non-fungible token".
        It is a special type of token minted on the Ethereum blockahain. Each token is unique
        and can not be replace by any other token. Lately NFT's have taken the world by storm,
        as more and more people use them to collect and trade there favorite digital art.
        Think about them as digital collectibles, whose uniquness and authenticity is verified by the blockchain.
      </p>

      <h3 className={cn(s.h3, s.pt)}> > How can I buy an AsciiPunk?</h3>
      <p>
        To buy an AsciiPunk, you need to have an Ethereum wallet setup. A commonly recommended one is{' '}
        <a href="https://metamask.io/" target="_blank">Metamask</a>. Get the Metamask chrome extension,
        set up your wallet, and fund it with ETH. Once you do that, you can use the "connect" button a the top of the page to
        connect your wallet to the site. Then mint to your hearts content!
      </p>
      <h3 className={cn(s.h3, s.pt)}> > How can I see my AsciiPunk?</h3>
      <p>
        After you use the site to mint, and once the transaction is confirmed, your newly adoped punk will show up here.
        Since AsciiPunks are an ERC721 compliant NFT, they will be viewable/tradeable on all major platforms.
      </p> 
    </Card>

    <Card className={s.card}>
      <h2 className={s.h2}>Who are we</h2>
      <p className={s.p}>
        AsciiPunks were crafted with love by{' '}
        <a href="https://twitter.com/nassredean" target="_blank">
          nassredean
        </a>
        , the most degen software dev you will ever meet, and{' '}
        <a href="https://twitter.com/kyleholzinger" target="_blank">
          kyle
        </a>
        , a wannabe renaisance man with a passion for crypto and art.
      </p>
      <p className={s.p}>
        AsciiPunks is not affiliated with Larva Labs, but we thank them for
        providing the crypto-art space so much inspiration.
      </p>
    </Card>
  </>
)

export default Intro
