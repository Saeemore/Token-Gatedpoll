import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section className="hero hero--landing">
        <div className="stack">
          <p className="hero__eyebrow">On-chain access with local-first governance</p>
          <h1 className="hero__title">Token-gated voting room that feels real.</h1>
          <p className="hero__subtitle">
            Mint a membership NFT, verify the connected wallet, and unlock a members-only
            poll backed by your local Hardhat contracts. This landing page introduces the
            flow without changing the working dapp behind it.
          </p>
          <div className="hero-metrics">
            <div className="metric-card">
              <span className="metric-card__label">Access model</span>
              <strong>NFT-gated membership</strong>
            </div>
            <div className="metric-card">
              <span className="metric-card__label">Vote policy</span>
              <strong>One wallet, one vote</strong>
            </div>
            <div className="metric-card">
              <span className="metric-card__label">Network</span>
              <strong>Hardhat localhost</strong>
            </div>
          </div>
          <div className="landing-actions">
            <Link className="btn" href="/access">
              Enter App
            </Link>
            <a className="btn btn--ghost" href="#how-it-works">
              Explore Flow
            </a>
          </div>
        </div>
        <div className="hero-stage">
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-panel stack">
            <span className="pill pill--success">Live local chain</span>
            <h2 className="hero-panel__title">Membership first. Voting second. One wallet, one voice.</h2>
            <p className="meta">
              The app checks NFT ownership before vote access, tracks one vote per member,
              and keeps the experience anchored to your local Hardhat network.
            </p>
            <div className="signal-grid">
              <div className="signal-card signal-card--active">
                <span className="signal-card__label">Step 1</span>
                <strong>Connect MetaMask</strong>
              </div>
              <div className="signal-card">
                <span className="signal-card__label">Step 2</span>
                <strong>Mint Membership NFT</strong>
              </div>
              <div className="signal-card">
                <span className="signal-card__label">Step 3</span>
                <strong>Cast Verified Vote</strong>
              </div>
            </div>
          </div>
          <div className="floating-card floating-card--top">
            <span className="floating-card__eyebrow">Member status</span>
            <strong>Wallet verified</strong>
            <p className="meta">A connected member can move from mint to governance without leaving the flow.</p>
          </div>
          <div className="floating-card floating-card--bottom">
            <span className="floating-card__eyebrow">Poll state</span>
            <strong>Vote syncs on-chain</strong>
            <div className="vote-preview">
              <span className="vote-preview__option">DAO</span>
              <span className="vote-preview__bar vote-preview__bar--one" />
              <span className="vote-preview__option">NFT</span>
              <span className="vote-preview__bar vote-preview__bar--two" />
              <span className="vote-preview__option">DeFi</span>
              <span className="vote-preview__bar vote-preview__bar--three" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid--two" id="how-it-works">
        <article className="card stack landing-card">
          <div>
            <h2>Why this flow works</h2>
            <p className="meta">
              The landing page stays separate from the dapp so your current connect, mint,
              and vote flow remains intact. Users get context first, then move into the
              working app with a single click.
            </p>
          </div>
          <ul className="feature-list">
            <li>Wallet-gated poll access through NFT membership</li>
            <li>Local Hardhat chain for predictable contract testing</li>
            <li>Dedicated entry page that does not disturb the running system</li>
          </ul>
        </article>

        <article className="card stack landing-card">
          <div>
            <h2>What happens next</h2>
            <p className="meta">
              Once inside the app, the user connects a wallet, mints the membership NFT,
              and proceeds into the poll only after verification succeeds.
            </p>
          </div>
          <div className="status-row">
            <span className="pill">Connect</span>
            <span className="pill">Verify</span>
            <span className="pill">Vote</span>
          </div>
          <Link className="btn btn--full" href="/access">
            Open Membership Gateway
          </Link>
        </article>
      </section>

      <section className="grid landing-feature-grid">
        <article className="feature-card">
          <span className="feature-card__index">01</span>
          <h3>Wallet-aware entry</h3>
          <p className="meta">
            The experience is designed around the connected wallet, so access status is
            visible before the user reaches the ballot.
          </p>
        </article>
        <article className="feature-card">
          <span className="feature-card__index">02</span>
          <h3>Contract-backed membership</h3>
          <p className="meta">
            Membership is not decorative. It is enforced by the NFT contract and checked
            before poll participation.
          </p>
        </article>
        <article className="feature-card">
          <span className="feature-card__index">03</span>
          <h3>Verified voting path</h3>
          <p className="meta">
            Once verified, the member enters a focused poll screen built for direct,
            single-action voting on the local chain.
          </p>
        </article>
      </section>
    </main>
  );
}
