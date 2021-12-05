import * as React from "react";
import { Admin, Resource } from 'react-admin';

import drfProvider from 'ra-data-django-rest-framework';
import Dashboard from './Dashboard';
import AuthProvider from './AuthProvider';

import { PostList, PostEdit, PostCreate } from './models/Posts';
import PostIcon from '@material-ui/icons/Book';

import { UserList } from './models/Users';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = drfProvider("/api");

const App = () => (
    <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
