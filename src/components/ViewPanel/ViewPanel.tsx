import './ViewPanel.css';
import { Button } from "@blueprintjs/core";

interface ViewPanelProps {
    setIsRowDisplay: (displayMode: boolean) => void
}

function ViewPanel({setIsRowDisplay}:ViewPanelProps) {
    return (
        <div className='buttons'>
            <Button icon="grid-view" onClick={ () => setIsRowDisplay(true)} />
            <Button icon="one-column" onClick={ () =>setIsRowDisplay(false)} />
        </div>
    )
}

export default ViewPanel;