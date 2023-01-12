import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import reviewer from '../../assets/images/product_page/Ellipse 38.png'

const QuestionCard = ({ que }) => {
    const { question, answer, createdAt, questionOwnerId: { firstName, lastName } } = que || {}
    return (
        <div>
            <div className="">
                <div className="mt-[24px] flex gap-3">

                    <p className="text-[18px]">{firstName} {lastName}</p>
                    <p className="text-[#686868]">#Question</p>
                </div>
                <small className="text-[#686868] ">{moment(createdAt).fromNow()}</small>
                <p className="">{question}?</p>
            </div>

            {
               answer && <div className="">
                    <div className="mt-[24px] flex gap-3">

                        <p className="text-[18px]">Banglar Big Bazar</p>
                        <p className="text-[#686868]">#Answer</p>
                    </div>
                    <small className="text-[#686868] ">{moment(createdAt).fromNow()}</small>
                    <p className="">{answer}</p>
                </div>
            }
        </div>
    );
};

export default QuestionCard;