import React from 'react';

import {
  Container,
  FooterBlock,
  FooterCustom,
  FooterStatistics,
  TextSpaced,
} from './styles';

export default function index() {
  return (
    <Container>
      <div className="container">
        <FooterCustom>
          <FooterBlock>
            <h3>Who is online</h3>
            <p>
              In total there are <strong>2</strong> users online :: 0
              registered, 0 hidden and 2 guests <br />
              <br />
              <span className="dimmed">
                based on users active over the past 5 minutes
              </span>
              Most users ever online was <strong>165</strong> on 12 March 2020,
              19:11
              <br />
              <br />
              Registered users: No registered users
              <br />
              Legend:{' '}
              <a
                style={{ color: '#AA0000' }}
                href="./memberlist.php?style=5&amp;mode=group&amp;g=5"
              >
                Administrators
              </a>
              ,{' '}
              <a
                style={{ color: '#00AA00' }}
                href="./memberlist.php?style=5&amp;mode=group&amp;g=4"
              >
                Global moderators
              </a>{' '}
            </p>
          </FooterBlock>

          <FooterBlock>
            <h3>Important links</h3>
            <ul>
              <li>
                <a href="#">Our Rules</a>
              </li>
              <li>
                <a href="#">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#">BBCode Examples</a>
              </li>
              <li>
                <a href="#">Empty Link</a>
              </li>
              <li>
                <a href="#">Creating an account</a>
              </li>
            </ul>
          </FooterBlock>
          <FooterBlock>
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </FooterBlock>
        </FooterCustom>
        <FooterStatistics>
          <TextSpaced>
            Total posts <strong>127</strong>
          </TextSpaced>
          <TextSpaced>
            Total topics <strong>4</strong>
          </TextSpaced>
          <TextSpaced>
            Total members <strong>4</strong>
          </TextSpaced>
          <TextSpaced>
            Our newest member{' '}
            <strong>
              <a
                href="./memberlist.php?style=5&amp;mode=viewprofile&amp;u=50"
                className="username"
              >
                Demo
              </a>
            </strong>
          </TextSpaced>
        </FooterStatistics>
      </div>
    </Container>
  );
}
