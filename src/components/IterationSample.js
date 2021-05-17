import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    /* 데이터 추가 기능 구현하기 */
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({ //불변성 유지
            id: nextId, //nextId 값을 id로 설정
            text: inputText
        });
        setNextId(nextId + 1); //nextId값에 1을 더해준다.
        setNames(nextNames); //names 값을 업데이트 한다.
        setInputText(''); //inputText를 비운다.
    }

    /* 데이터 제거 기능 구현하기 */
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;
