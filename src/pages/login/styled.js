import styled from 'styled-components';
export const LoginWrapper = styled.div`
    z-index:0;
    height: 100%;
    min-height: 550px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    margin-top:70px;

`
export const LoginTitle = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;  
    h4{
        margin: 0 auto 50px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
    }
`

export const LoginContent = styled.div`
    margin-bottom: 30px;
    margin: 0 0 20px;
    .from-group{
        position: relative;
        width: 100%;
    }
    .from-control{
        border-bottom: none;
        border-radius: 4px 4px 0 0;
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
    }
    .from-pic{
        position: absolute;
        top: 14px;
        left: 10px;
        font-size: 18px;
        color: #969696;
    }
    .from-control-pass{
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        border-top:none;
    }
    input{
        &::placeholder{
            color:#969696;
        }
        outline:none;
    }
`
export const LoginButton = styled.button.attrs( () => ({
    type:'button'
}))`
    background: #3194d0;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    &:hover{
        background: #187cb7;
    }
`

