import React from 'react';
import { ShoppingList } from './ShoppingList';

export default function ShoppingPage() {
    return (
        <div className="flex h-screen">

            <div className="w-1/5 flex items-center justify-center">
                <ShoppingList>

                </ShoppingList>
            </div>
            <div className="w-3/5 flex flex-col bg-blue-500">

            </div>
            <div className="w-1/5 flex flex-col bg-green-500">

            </div>
        </div>
    );
}