import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';
import 'react-native-mock-render/mock';

enzyme.configure({ adapter: new Adapter() });

function suppressDomErrors() {
  const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase|Received `%s` for a non-boolean attribute `%s`.)/;
  // eslint-disable-next-line no-console
  const realConsoleError = console.error;
  // eslint-disable-next-line no-console
  console.error = message => {
    if (message.match(suppressedErrors)) {
      return;
    }
    realConsoleError(message);
  };
}
suppressDomErrors();
