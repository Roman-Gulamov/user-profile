import styled from 'styled-components';


export const Container = styled.div`
    padding: 0 15px;

    @media (min-width: 500px){
        padding: 0 60px;
    }

    @media (min-width: 575.98px){
        padding: 0 calc(50vw - 200px);
    }

    @media (min-width: 767.98px){
        padding: 0 calc(50vw - 300px);
    }

    @media (min-width: 1199.98px){
        padding: 0 calc(50vw - 300px);
    }
`