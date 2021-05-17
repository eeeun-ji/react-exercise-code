import React, {Component} from 'react';

class Counter extends Component {
    //생성자 사용하지 않고도, state의 초깃값 지정
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const {number, fixedNumber} = this.state; //state를 조회할때는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>
                    바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    //onClick을 통해 버튼이 클릭되었을때, 호출할 함수를 지정한다.
                    onClick={() => {
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                        this.setState({
                            number: number + 1
                        },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                        }
                        );
                    }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
