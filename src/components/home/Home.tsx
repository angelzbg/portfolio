import { observer } from 'mobx-react';
import { useStore } from '../../state/state';
import './styles/home.css';
import devData from './data';
import { useEffect } from 'react';
const { details } = devData;

declare global {
  interface Window {
    closeWindowSafely?: () => void;
  }
}

const Home = observer(() => {
  const store = useStore();

  useEffect(() => {
    if (window.parent && window.parent !== window) {
      window.parent.closeWindowSafely = function () {
        window.close();
      };
    }
  }, []);

  return (
    <center>
      <div className="home-wrapper">
        <div className="text-shadow" style={{ color: 'var(--lightest)' }}>
          Plovdiv, Bulgaria
        </div>
        <div className="text-shadow" style={{ color: 'var(--light)', fontSize: '80%' }}>
          busyness !== importance
          <br />
          multitasking !== productivity
          <br />
          <button
            onClick={() => {
              if (window.closeWindowSafely) {
                window.closeWindowSafely();
              }
              window?.close();
            }}
          >
            agree to disagree
          </button>
        </div>
        <br />
        <div className="text-shadow" style={{ color: 'var(--lightest)', fontSize: '105%' }}>
          My passion is <b>back of the front end</b> web development
        </div>
        <br />
        <div className="home-data-wrapper">
          <div className="home-menu">
            {details.map(({ title, information }, i) => (
              <div
                key={`home-menu-item-${i}`}
                className={store.bofeHover === i ? 'home-menu-item-hovered' : 'home-menu-item'}
                onClick={() => store.setBofeHover(i)}
                style={
                  i === 0
                    ? {
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        ...(i === store.bofeHover - 1 ? { borderBottom: 'none' } : {}),
                      }
                    : i === details.length - 1
                    ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }
                    : i === store.bofeHover - 1
                    ? { borderBottom: 'none' }
                    : {}
                }
              >
                {title}
                {store.bofeHover === i && <div className="home-info">{information}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </center>
  );
});

export default Home;
