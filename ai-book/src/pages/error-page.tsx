import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';

interface ErrorPageProps {
  error?: Error;
  // Docusaurus will pass the error that occurred during the rendering of the page
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  return (
    <Layout
      title={translate({ id: 'theme.ErrorPage.title', message: 'Error' })}
      wrapperClassName="error-page-wrapper"
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              {translate({ id: 'theme.ErrorPage.title', message: 'Error' })}
            </h1>
            <p className="hero__subtitle">
              {translate({
                id: 'theme.ErrorPage.description',
                message: 'An unexpected error occurred while loading this page.',
              })}
            </p>
            {error && (
              <details className="margin-vert--md">
                <summary>
                  {translate({ id: 'theme.ErrorPage.componentStack', message: 'Component Stack' })}
                </summary>
                <pre className="language-text">{error.stack}</pre>
              </details>
            )}
            <div className="margin-vert--lg">
              <a
                className="button button--primary button--lg"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
              >
                {translate({ id: 'theme.ErrorPage.backToHomepage', message: 'Go to Homepage' })}
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ErrorPage;