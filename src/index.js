import dva from 'dva';
import { message } from 'antd'
import Mock from 'mockjs'
import './index.css';
import { mockStart } from './mock/index'
import { api } from './config/constants'

// 1. Initialize
const app = dva({
    onError(e) {
        message.error(e.message);
    }
});

app.model(require("./models/users"));

app.model(require("./models/user"));

app.model(require("./models/introduction"));

app.model(require("./models/app"))

app.model(require("./models/loginModal"))

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

mockStart(api);

