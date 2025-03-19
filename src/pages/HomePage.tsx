import React from 'react';
import ConversationList from '../components/ConversationList';

const HomePage: React.FC = () => {
    return (
        <div className="ml-[25%] p-4 bg-slate-300 h-full">
            <ConversationList />
        </div>
    );
};

export default HomePage;
