import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import { IconName } from "react-icons/bi";


export default function Navbar() {
        
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="10%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="10%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="10%" />,
        },
        {
            label: 'BiHomeAlt',
            icon: () => <img alt="BiHomeAlt" src="https://react-icons.github.io/react-icons/icons?name=bi" width="10%" />,
        }
    ];

   

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
    
                        <div className="flex align-items-center">
                            <RadioButton/>
                           
                        </div>
                
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items}  />
            </div>
        </div>
    )
}
