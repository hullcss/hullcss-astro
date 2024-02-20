import { IIcon } from './icon';

/**
 * Represents a lazy link.
 */
export interface ILink {
    /**
     * The name of the link.
     */
    name : string;   
    /**
     * The URL of the link.
     */
    href : string;
    /**
     * The description of the link.
     */
    desc : string;
    /**
     * The link that will be used to redirect to the link.
     */
    link : string;
    /**
     * The optional FA icon for the link.
     */
    icon?: IIcon;
    /**
     * Toggles whether the link should be displayed in the tree
     */
    hide?: boolean;
}