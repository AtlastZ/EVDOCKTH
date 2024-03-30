export function handleModel(data: any, key: any, handleChange: any ) {
    switch (data.datatype) {
        case 'string':
            return (
                <div key={key}>
                    <div>{data.name}</div>
                    <input type="text"
                        id={data.name}
                        name={data.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            );
        case 'number':
            return (
                <div key={key}>
                    <div>{data.name}</div>
                    <input type="text"
                        id={data.name}
                        name={data.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            );
        case 'Date':
            return (
                <div key={key}>
                    <div>{data.name}</div>
                    <input type="date"
                        id={data.name}
                        name={data.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            );
    }
}