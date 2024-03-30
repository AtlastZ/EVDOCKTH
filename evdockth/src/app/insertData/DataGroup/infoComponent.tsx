import { useState } from 'react';
import { Info } from '../DataField/DataFields';
import { InfoObject } from '../DataField/datafieldObj';
import { handleModel } from '../handleModel';


export function InfoComponent({ onChange }: any) {

    const [thisInfo, setThisInfo] = useState<Info>({
        brands: '',
        model: '',
        status: '',
        price: 0,
        launchDate: new Date()
    });

    const dataModel: any[] = InfoObject();

    const handleChange = (e: any) => {
        setThisInfo({
            ...thisInfo,
            [e.target.name]: e.target.value
        })
        onChange(thisInfo);
    };
    
    const handleShowdata = (data: any, key:any) => {
        return handleModel(data, key, handleChange);
    }

    return (
        <div>
            {dataModel.map((data, key) => (handleShowdata(data, key)))}
        </div>

    );
}