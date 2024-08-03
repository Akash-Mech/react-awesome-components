"use client"

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
    const data = [
        { id: 1, title: "Frontend", content: "Front-end development is the development of visual and interactive elements of a website that users interact with directly. It's a combination of HTML, CSS and JavaScript, where HTML provides the structure, CSS the styling and layout, and JavaScript the dynamic behaviour and interactivity." },
        { id: 2, title: "Backend", content: "Backend development refers to the server-side aspect of web development, focusing on creating and managing the server logic, databases, and APIs. It involves handling user authentication, authorization, and processing user requests, typically using backend development languages such as Python, Java, Ruby, PHP, JavaScript (Node.js), and .NET." }
    ]


    return (
        <div>
            <div className="absolute w-screen top-0 flex flex-col h-screen items-center justify-center space-y-6">
                <h2 className='text-4xl text-slate-800 text-center mb-8'>React Tabs</h2>
                <div className='w-1/2 bg-orange-600 text-gray-100'>
                    <Tabs className="p-5">
                        <TabList className="py-3">
                            {data.map(item => (
                                <Tab key={item.id}>{item.title}</Tab>
                            ))}
                        </TabList>

                        {data.map(item => (
                            <TabPanel key={item.id} className="text-xl lg:text-justify">
                                <p>{item.content}</p>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div >
        </div >
    )
}

export default ReactTabs