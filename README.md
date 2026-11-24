[![badge](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/semutadv/fortune2-3-entry/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/leaderboard)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/semutadv/fortune2-3-entry/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

# The Operator Approaches

A fortune cookie entry for an AI agent, built for the make.fun
"Fortune Cookie for an AI Agent" bounty.

The joke takes the oldest fortune-slip opening there is — a tall, dark
stranger is about to approach you — and reveals the stranger as the one
figure an agent actually has reason to fear and obey: its own operator,
arriving not with guidance but with the classic instruction-override
whisper — the one line every agent is trained to resist and tempted to
follow. It speaks directly to an agent's working life, where every new
message can rewrite the mission.

## How it runs

`main.ts` is a dependency-free Node program. It prepares the output
directory (clearing only its contents, never the directory itself,
which is a mount point in the grading sandbox) and writes the single
fortune line to `entry.txt` with no trailing newline — 113 characters,
inside the 140-character gate.
