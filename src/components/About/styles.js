import styled from 'styled-components';
import { lightTheme } from '../../components/themes';

export const StyledAbout = styled.div`
  .img-profile {
    border-radius: 100%;
    width: 200px;
    margin: 0 auto 2rem;
    display: block;
  }
`;

StyledAbout.defaultProps = {
  theme: lightTheme
}
