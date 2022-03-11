import styled from 'styled-components';

export default styled.div`
  background-color: white;
  width: 200px;
  height: 250px;
  border: solid 1px;
  border-color: rgba(0, 0, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 1px 1.4px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 345px;
    height: 250px;
    margin-top: 1rem;
    box-shadow: none;
  }
`;
