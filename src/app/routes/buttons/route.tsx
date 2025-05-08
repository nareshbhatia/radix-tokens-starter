import styles from './route.module.css';
import {
  Button,
  ButtonIntent,
  ButtonSize,
  ButtonVariant,
  Icons,
} from '../../../components';
import { Fragment } from 'react/jsx-runtime';

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export interface ButtonsTableProps {
  size: ButtonSize;
}

export function ButtonsTable({ size }: ButtonsTableProps) {
  return (
    <table className="story-table rt-width-3xl">
      <thead>
        <tr>
          <th />
          <th />
          <th>Text</th>
          <th>Text + Icon End</th>
          <th>Text + Icon Start</th>
          <th>Icon</th>
          <th>Disabled</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(ButtonVariant).map((variant) =>
          Object.values(ButtonIntent).map((intent, index) => (
            <tr key={`${variant}-${intent}`}>
              {index === 0 && <th rowSpan={4}>{upperFirst(variant)}</th>}
              <th>{upperFirst(intent)}</th>
              <td>
                <Button intent={intent} size={size} variant={variant}>
                  Button text
                </Button>
              </td>
              <td>
                <Button intent={intent} size={size} variant={variant}>
                  Button text
                  <Icons.plusIcon
                    className={
                      size === ButtonSize.Small ? 'rt-size-16' : 'rt-size-20'
                    }
                  />
                </Button>
              </td>
              <td>
                <Button intent={intent} size={size} variant={variant}>
                  <Icons.plusIcon
                    className={
                      size === ButtonSize.Small ? 'rt-size-16' : 'rt-size-20'
                    }
                  />
                  Button text
                </Button>
              </td>
              <td>
                <Button intent={intent} size={size} variant={variant}>
                  <Icons.plusIcon
                    className={
                      size === ButtonSize.Small ? 'rt-size-16' : 'rt-size-20'
                    }
                  />
                </Button>
              </td>
              <td>
                <Button disabled intent={intent} size={size} variant={variant}>
                  Button text
                </Button>
              </td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
}

export function ButtonsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        {Object.values(ButtonSize).map((size) => (
          <Fragment key={size}>
            <h1 className="rt-heading-lg">Buttons – {upperFirst(size)}</h1>
            <ButtonsTable size={size} />
          </Fragment>
        ))}
      </main>
    </div>
  );
}
