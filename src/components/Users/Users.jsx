import React from 'react';
import styles from './Users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIna5_1Tcmkha_KMBiodqb_NJpYXat2iPLQ&usqp=CAU',
                    followed: false,
                    fullName: 'Evgen',
                    status: 'first commandor',
                    location: {city: 'Acapulco', country: 'Mexico'}
                },
                {
                    id: 2,
                    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIna5_1Tcmkha_KMBiodqb_NJpYXat2iPLQ&usqp=CAU',
                    followed: true,
                    fullName: 'Asya',
                    status: 'second first commandor',
                    location: {city: 'Acapulco', country: 'Mexico'}
                },
                {
                    id: 3,
                    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIna5_1Tcmkha_KMBiodqb_NJpYXat2iPLQ&usqp=CAU',
                    followed: false,
                    fullName: 'Sonya',
                    status: 'second commandor',
                    location: {city: 'Lissabon', country: 'Portugal'}
                },
                {
                    id: 4,
                    fotoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIna5_1Tcmkha_KMBiodqb_NJpYXat2iPLQ&usqp=CAU',
                    followed: true,
                    fullName: 'Kristi',
                    status: 'third commandor',
                    location: {city: 'Saint Pitersberg', country: 'Russia'}
                }
            ]
        )
    }
    return (
            <div>
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img  src={u.fotoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ?  <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
    )
}

export default Users;