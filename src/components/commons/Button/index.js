import styled, {css} from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
    background:transparent;
    color: ${(props) => get(props.theme,`colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
    background-color: ${(props) => get(props.theme,`colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme,`colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity:1;
    border-radius: 8px;
    transition: ${({theme}) => theme.transition};
    border-radius: ${({theme}) => theme.borderRadius};
    ${function(props){
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;