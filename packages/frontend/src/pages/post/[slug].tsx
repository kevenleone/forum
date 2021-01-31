import React from 'react';

import {
  Article,
  ArticleBody,
  ArticleHeader,
  Author,
  Avatar,
  Container,
  Nickname,
} from './style';

const PostContainer = () => (
  <Container>
    <Author>
      <Avatar src="https://board.playpolar.net/download/file.php?avatar=173_1611989841.png" />
      <Nickname>Disaster</Nickname>
    </Author>
    <Article>
      <ArticleHeader>
        <span>Grand Exchange</span>
        <span>#1</span>
      </ArticleHeader>
      <ArticleBody>
        <div className="post-content">
          <div style={{ textAlign: 'center' }}>
            <strong className="text-strong">Trickster Grand Exchange</strong>
          </div>
          Understanding this is near impossible because of "Reasons", I would
          love to see this happen.
          <br />
          <br />
          <strong className="text-strong">Concept</strong>
          <br />
          <span style={{ textDecoration: 'underline' }}>
            Fairly Simple
          </span>{' '}
          concept being a central trading interface for PlayPolarTrickster. In
          this way, we can eliminate the need for Player Owned Shop AFKing and
          encourage trade. It is{' '}
          <strong className="text-strong">
            <span style={{ textDecoration: 'underline' }}>Essential</span>
          </strong>{' '}
          that this Exchange be visually pleasing and seamlessly immersive ( See
          WoW or RuneScape for good examples ) <br />
          <strong className="text-strong">Pros</strong>
          <ul>
            <li>
              AFK sales - Set and forget! List your item, a price, and set to
              sell
            </li>
          </ul>
          <ul>
            <li>
              Encouraged Trade - Feel like selling insignificant items or common
              quests? Want to clean your inventory? Trade your things, don't let
              them sit or destory!
            </li>
          </ul>
          <ul>
            <li>
              Player Economic Opportunity - Encouraged trade means better
              Player-Driven Economy over-all
            </li>
          </ul>
          <ul>
            <li>
              Price Watch - Be able to search acceptable going prices of goods
              by comparing to the rest of the market
            </li>
          </ul>
          <ul>
            <li>
              ePay-To-Win Support - For those who wish to outright buy quests to
              avoid wasting time
            </li>
          </ul>
          <ul>
            <li>
              Untradeable-Trade - Being able to exchange items once untradeable
            </li>
          </ul>
          <ul>
            <li>Market Insight - Provides Data for traded items and such</li>
          </ul>
          <ul>
            <li>
              Well Accepted - I believe everyone would like to see this
              incorporated better than in PlayTrickster lmao
            </li>
          </ul>
          <strong className="text-strong">Cons</strong>
          <ul>
            <li>
              Encourages Market Manipulations - Multi-Account driven sellers
              will have the advantage
            </li>
          </ul>
          <ul>
            <li>
              Hard to Incorporate In-Game - Requires a Client Source Code.
              Server and DB is easy if you're a decent dev and assuming the team
              actually built (Or knows how to manipulate) the source{' '}
              <img
                className="smilies"
                src="./images/smilies/icon_e_wink.gif"
                alt=";)"
                title="Wink"
                width="15"
                height="17"
              />
            </li>
          </ul>
          <ul>
            <li>
              Changes Entire Game Economic Workings - Can be a shock to the
              Economy as is
            </li>
          </ul>
          <ul>
            <li>
              Player Shop Relevance - Player Shops may reduce in numbers. Offset
              by linking all live Player Shops to Exchange? ( Unlikely )
            </li>
          </ul>
          Thoughts? <br />
          <br />
          : &lt;3 Thoughts Added &lt;3 :<br />
          Helmont
        </div>
      </ArticleBody>
    </Article>
  </Container>
);

export default function Post() {
  return (
    <>
      <PostContainer></PostContainer>
      <PostContainer></PostContainer>
    </>
  );
}
