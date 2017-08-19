import styled from "styled-components";

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: pointer;

	:hover {
		transform: scale(1.1);
	}

	:active {
		background-color: palevioletred;
	}
`;

const InputDiv = styled.div`
text-align: center;
margin: auto;
`;

const P = styled.p `
	font-size: 25px;
	text-align: center;
	margin: auto;
	font-family: "Comic Sans";
`;

const Title = P.extend `
	font-size: 50px;
`;

export {Button, P, Title, InputDiv};