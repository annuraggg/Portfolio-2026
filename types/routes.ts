export type DynamicRouteParams = {
  id: string;
};

export type CasePageProps = {
  params: Promise<DynamicRouteParams>;
};

export type ProjectPageProps = {
  params: Promise<DynamicRouteParams>;
};
