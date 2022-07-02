import { IPrimaryLayout} from './BaseLayout';
import React from 'react';

const base: IPrimaryLayout = {
    children: React.createElement('li', {id:'li1'}, 'one')
};

export const mockBaseLayoutProps ={
    base
};