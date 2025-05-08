import styles from './route.module.css';

export function TypographyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <h1 className="rt-heading-2xl">The Joke Tax Chronicles</h1>
        <p className="rt-body">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <h2 className="rt-heading-xl">The King&apos;s Plan</h2>
        <p className="rt-body">
          The king thought long and hard, and finally came up with{' '}
          <a className="rt-link" href="/">
            a brilliant plan
          </a>
          : he would tax the jokes in the kingdom.
        </p>
        <h3 className="rt-heading-lg">The Joke Tax</h3>
        <p className="rt-body">
          The king&apos;s subjects were not amused. They grumbled and
          complained, but the king was firm:
        </p>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p className="rt-body">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him down: a court jester named Jokester.
        </p>{' '}
      </main>
    </div>
  );
}
