import React from 'react';
import uuid from 'uuid/v4';

function chunckArray (arr, chunkSize){
    let index = 0;
    let arrlength = arr.length;
    let tempArr = [];

    for (index = 0; index < arrlength; index += chunkSize) {
        let myChynk = arr.slice(index, index + chunkSize);
        tempArr.push(<tr key={uuid()}>{myChynk}</tr>);
    }

    return tempArr;
}

export default chunckArray;