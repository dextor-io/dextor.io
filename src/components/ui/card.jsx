import React from 'react';

const Card = ({ className, children }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children }) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
};

const CardTitle = ({ className, children }) => {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
};

const CardDescription = ({ className, children }) => {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
};

const CardContent = ({ className, children }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };