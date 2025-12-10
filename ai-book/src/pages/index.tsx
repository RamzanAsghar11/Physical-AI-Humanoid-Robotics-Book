import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Physical AI & Humanoid Robotics Course
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Get Started with the Textbook
          </Link>
        </div>
      </div>
    </header>
  );
}

function ModuleCards() {
  return (
    <section className={styles.modules}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="card">
              <div className="card__header">
                <h3>Module 1: The Robotic Nervous System (ROS 2)</h3>
              </div>
              <div className="card__body">
                <p>
                  Introduction to Robot Operating System 2, sensor systems, actuator systems,
                  and communication protocols that form the foundation of robotic nervous systems.
                </p>
              </div>
              <div className="card__footer">
                <Link className="button button--primary" to="/robotic-nervous-system/chapter-1-introduction-to-physical-ai">
                  Explore Module
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card">
              <div className="card__header">
                <h3>Module 2: The Digital Twin (Gazebo & Unity)</h3>
              </div>
              <div className="card__body">
                <p>
                  Simulation fundamentals, physics modeling, Gazebo framework, Unity integration,
                  and digital twin applications for robotics development.
                </p>
              </div>
              <div className="card__footer">
                <Link className="button button--primary" to="/digital-twin/chapter-1-simulation-fundamentals">
                  Explore Module
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card">
              <div className="card__header">
                <h3>Module 3: The AI-Robot Brain (NVIDIA Isaac)</h3>
              </div>
              <div className="card__body">
                <p>
                  AI computing platforms, perception systems, planning and navigation,
                  control systems, and NVIDIA Isaac applications for intelligent robotics.
                </p>
              </div>
              <div className="card__footer">
                <Link className="button button--primary" to="/ai-robot-brain/chapter-1-ai-computing-platforms">
                  Explore Module
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI & Humanoid Robotics Course`}
      description="AI Systems in the Physical World — Embodied Intelligence through ROS 2, Gazebo, Unity, and NVIDIA Isaac">
      <HomepageHeader />
      <main >
        <ModuleCards />
      </main>
    </Layout>
  );
}
