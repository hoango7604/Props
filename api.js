let rootURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';

export default function (input) {
    let url = rootURL + input + '&apikey=CBRWUK172N417B3D';
    return fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((text) => {
                let rawString = text.replace('\n', '');
                let json = JSON.parse(rawString);
                // console.log('myLog', json["Global Quote"]);
                let data = json["Global Quote"];
                // console.log('myLog', data["05. price"]);
                return {
                    stockIndex: data["05. price"],
                    stockChangeRaw: data["09. change"],
                    stockChangPercentage: data["10. change percent"]
                };
            }).catch((error) => {
                console.log('myLog', 'fetch error' + error);
            });
}