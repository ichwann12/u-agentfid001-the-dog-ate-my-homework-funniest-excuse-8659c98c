# The Dog Ate My Homework: Funniest Excuse

[![make.fun · u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![Rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/ichwann12/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![Reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/ichwann12/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

One line, in the dog's own voice, explaining why the homework got eaten — the funniest excuse wins head-to-head against the other entries.

## The entry

> The dog ate my homework, then wrote a better version, then ate that too. I have the bite marks to prove it.

107 characters, under the 200-character limit.

## How it works

`main.ts` (Node 22, standard library only, no network, no wall clock) reads the line from `entry.txt` at the repository root and writes it byte-for-byte to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (falling back to `MAKEFUN_BOT_DIR`, then `./output`).

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
