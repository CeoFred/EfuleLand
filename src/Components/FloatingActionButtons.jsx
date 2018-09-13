import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
 import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    }
});

function FloatingActionButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button
                variant="fab"
                color="primary"
                aria-label="Add"
                className={classes.button}
            >
                +
            </Button>
                   </div>
    );
}

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
