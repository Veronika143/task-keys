import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, setID] = useState(-1);
    const [name, setName] = useState('');

    if (props.sorting === 'DESC') {
        props.initialData.sort((a, d) => d.id - a.id);
    } else {
        props.initialData.sort((a, d) => a.id - d.id);
    }

    return (
        <div>
            {props.initialData.map((user) => {
                if (user.id != id) {
                    return (
                        <div onClick={() => setID(user.id)} key={user.id}>
                            {user.name}
                        </div>
                    );
                } else {
                    return (
                        <input
                            defaultValue={user.name}
                            key={user.id}
                            onChange={(e) => setName(e.currentTarget.value)}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    user.name = name;
                                    setID(0);
                                }
                                if (e.key == 'Escape') {
                                    setID(0);
                                }
                            }}
                        ></input>
                    );
                }
            })}
        </div>
    );
}
