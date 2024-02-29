import { useRef } from "react";

import { TbHandClick } from "react-icons/tb";
import styled from 'styled-components';
import { NumberFormat } from "../../business/NumberFormat";
import type { commonType } from "../../types/Types";

type PropsType = {
    name: commonType
    bank: commonType,
    balance: number,
    account: commonType,
}

export const CardSection = ({ name, bank, balance, account }: PropsType) => {
    const card = useRef<HTMLDivElement | null>(null);

    const cardClick = () => {
        const elem = card.current;
        if (elem && elem.style.transform === "rotateY(180deg)") {
            elem.style.transform = "rotateY(0deg)";
        } else if (elem) {
            elem.style.transform = "rotateY(180deg)";
        }
    };

    return (
        <CardContainer>
            <Card ref={card} onClick={cardClick}>
                <FrontFace className="bg-primary border-2 border-primary">
                    <p className="text-xl">Tikul</p>
                    <div className="flex gap-1">
                        <p>내 계좌 정보를 확인하려면 클릭하세요.</p>
                        <TbHandClick className="text-xl" />
                    </div>
                </FrontFace>
                <BackFace className="border-2 border-primary">
                    <div className="overflow-x-auto">
                        <table className="table text-center">
                            <tbody>
                                <tr>
                                    <th>예금주</th>
                                    <td className="text-base font-bold">{name}</td>
                                </tr>
                                <tr>
                                    <th>은행</th>
                                    <td className="text-base font-bold">{bank}</td>
                                </tr>
                                <tr>
                                    <th>계좌번호</th>
                                    <td className="text-base font-bold">{account}</td>
                                </tr>
                                <tr>
                                    <th>잔액</th>
                                    <td className="text-base font-bold">{NumberFormat(balance)}원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </BackFace>
            </Card>
        </CardContainer>
    );
}

export const CardContainer = styled.div`
    perspective: 1000px;
`;

const Card = styled.div`
    width: 330px;
    height: 220px;
    transform-style: preserve-3d;
    transition: transform 1s;
    cursor: pointer;
    transform: rotateY(180deg);
`;

const BackFace = styled.div`
    
    position: absolute;
    text-align: left;
    padding: 16px;
    border-radius: 8px;
    height: 220px;
    width: 330px;
    backface-visibility: hidden;
`;

const FrontFace = styled.div`
display: flex;
    position: absolute;
     flex-direction: column;
    justify-content: space-between;
    transform: rotateY(180deg);
    text-align: left;
    padding: 16px;
    border-radius: 8px;
    color: #ffffff;
    height: 220px;
    width: 330px;
    backface-visibility: hidden;
`;