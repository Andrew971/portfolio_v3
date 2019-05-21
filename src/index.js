import Render from './Utils/providers';
import './index.css';
import * as serviceWorker from './serviceWorker';

Render(document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
