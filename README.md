# react-awesome-loader
Facebook like content placeholder for react

A loader facebook like based on mockup style content placeholder.

## Demo

View the ![comming soon](./demo.png).

Alternatively, run it locally:

```
npm install
npm run start:dev
```

react-awesome-loader is also available as part of node modules.

Just import the module and use it as follow:

```
import Loader from 'react-awesome-loader';

const App = () => (
  <Loader
    nbrItems={2}
    />
);
```
## Props

### nbrItems

type: `number`

indicates the times a single item of the loader should be displayed. For example, if you are loading 3 contents, then you could display the placeholder 3 times

## License

ISC
