import React, {
    useState,
    useEffect,
} from 'react';

const images = [
    'https://img.xintp.com/2019/12/10/xl5gp5kgesw.jpg',
    'https://th.bing.com/th/id/R5a5dccf9f52efae5f9a156324f83cc48?rik=J9B5x1XA%2biG0iQ&riu=http%3a%2f%2fimg.netbian.com%2ffile%2f20120824%2ff6ff304d89fa169618ae1d654bf97bf6.jpg&ehk=mD5EgzKYxmUTAsXJ01tu%2bfS3VcSjJxbERvWUZSjafKY%3d&risl=&pid=ImgRaw',
    'https://pic3.zhimg.com/v2-604a15cef201cf177943af2d915eb2e7_r.jpg',
    'https://th.bing.com/th/id/R7b03e06ac168887db94276272de229f0?rik=d2hYE8aiaK0Tbg&riu=http%3a%2f%2fpicture.ik123.com%2fuploads%2fallimg%2f141121%2f17-141121110511.jpg&ehk=MqeItfgR%2f872QHl9fRZibS4qDzuS%2fI6Sv%2bOUlQ7505Y%3d&risl=&pid=ImgRaw'
];

function Carousel() {    
    var len = images.length;
    var width = window.innerWidth;
    var threshold = width / 3;
    var inferior = 30;

    function indexAdd() {
        return (index + 1 === len) ? 0 : index + 1;
    }

    function indexDec() {
        return (index === 0) ? len - 1 : index - 1;
    }

    var [index, setIndex] = useState(0);
    var [click, setClick] = useState(0);
    var [offset, setOffset] = useState(0);
    var [start, setStart] = useState(0);

    var interval;

    useEffect(() => {
        if (click) return;

        const interval = setInterval(() => {
            setIndex(indexAdd());
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, );

    function mouseDownHandler(e) {
        clearInterval(interval);
        setClick(1);
        setOffset(0);
        setStart(e.clientX);
    }

    function mouseUpHandler() {
        setOffset(0);
        setClick(0);
    }

    function cancel() {
        setOffset(0);
    }

    function mouseMoveHandler(e) {
        if (!click) return;
        setOffset(e.clientX - start);
        if (Math.abs(offset) < threshold) {
            if (click) return;
            else cancel();
        }
        else if (Math.abs(offset) > threshold) 
        {
            setIndex((offset < 0) ? indexAdd() : indexDec());
            setClick(0);
        }
    }

    var getPrev = (() => {
        if (offset < inferior)// || Math.abs(offset) > threshold)
            return {
                display: 'none'
            }
        
        return {
            display: 'block',
            width: `${offset - inferior}px`,
            backgroundImage: `url(${images[indexDec()]})`
        }
    });

    var getCurr = (() => {
        return {
            transform: `translateX(${offset}px)`,
            backgroundImage: `url(${images[index]})`
        }
    });

    var getNext = (() => {
        if (offset > -inferior)// || Math.abs(offset) > threshold)
            return {
                display: 'none'
            }
        
        return {
            display: 'block',
            width: `${-offset - inferior}px`,
            backgroundImage: `url(${images[indexAdd()]})`,
        }
    });

    return ( 
    <div className="wrapper" onMouseMove={ mouseMoveHandler }>
        <div className="slides">
            <div className="slide prev" style={{...getPrev()}}>
            </div>
            <div className="slide curr" style={{...getCurr()}}
                onMouseDown={ mouseDownHandler }
                onMouseUp={ mouseUpHandler }>
            </div>
            <div className="slide next" style={{...getNext()}}>
            </div>
        </div>

        <button id="last" onClick={ () => setIndex(indexDec()) }>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1906" width="48" height="48">
                <path d="M684.382658 950.179091c10.534712-10.533713 10.534712-27.613034 0-38.146748L284.851824 512.500511 684.381659 112.966681c10.534712-10.533713 10.534712-27.613034 0-38.146747-10.533713-10.533713-27.613034-10.533713-38.145749 0L227.330997 493.724847c-10.533713 10.534712-10.533713 27.613034 0 38.146747a27.1365 27.1365 0 0 0 3.681405 3.083988l415.224507 415.223509c10.533713 10.533713 27.613034 10.533713 38.145749 0z" p-id="1907"></path>
            </svg>
        </button> 
        <button id="next" onClick={ () => setIndex(indexAdd()) }>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="791" width="48" height="48">
                <path d="M340.235739 950.179091c-10.533713-10.533713-10.533713-27.613034 0-38.146748l399.532831-399.531832-399.532831-399.53383c-10.533713-10.533713-10.533713-27.613034 0-38.146747 10.534712-10.533713 27.613034-10.533713 38.146747 0l418.904913 418.904913c10.534712 10.534712 10.534712 27.613034 0 38.146747a27.1365 27.1365 0 0 1-3.681405 3.083988L378.382486 950.179091c-10.533713 10.533713-27.613034 10.533713-38.146747 0z" p-id="792"></path>
            </svg>
        </button>
    </div>
    );
}


export default Carousel;