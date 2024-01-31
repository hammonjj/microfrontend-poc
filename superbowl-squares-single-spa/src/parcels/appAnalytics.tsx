export interface AppAnalyticsProps {
  gameId: string;
}

export default function AppAnalytics(props: AppAnalyticsProps) {
  return (
    <div style={{ border: '1px solid black' }}>
      <h2>Superbowl Squares Analytics Widget</h2>
      <div>
        This component is coming from the main Superbowl Squares app, but isn't loading the 
        application only this widget. I am also passing a gameId prop in</div>
      <div>AppAnalytics for Game #{props.gameId}</div>
    </div>
  );
};