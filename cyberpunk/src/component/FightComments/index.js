import {fightCommentEnum} from "../../model/fightComment";
import PropTypes from "prop-types";

const FightComments = ({ comments }) => {

    return (
        <div className="flex flex-col p-4">
        {
            !!comments.length && comments.map((c, i) => {
                if (!c) {
                    return;
                }

                switch (c.fightCommentEnum.value) {
                    case fightCommentEnum.Strike.value :
                        return (
                            <span key={i}>
                                <i className="fas fa-fist-raised mr-4 text-gray-600"/>
                                <span className="font-bold text-gray-700 mr-2">{c.strikerName}</span>
                                strike
                                <span className="font-bold text-red-900 ml-2 mr-2">{c.enemyName}</span>
                                with {c.phInflicted}PH inflicted
                            </span>
                        )
                    case fightCommentEnum.StrikeFailed.value:
                        return <span key={i}>The {c.strikerName}'s knock failed...</span>
                    case fightCommentEnum.PhSummarize.value:
                        return (
                            <span className="mb-4 text-sm" key={i}>
                                <i className="fas fa-heart mr-4 text-red-600"/>
                                ({c.enemyName} has {c.enemyPh}PH)
                            </span>
                        )
                    case fightCommentEnum.FighterDie.value:
                        return (
                            <span className="mb-8" key={i}>
                                <i className="fas fa-skull mr-4"/>
                                {c.enemyName} die !
                            </span>
                        )
                }
            })
        }
        </div>
    )
}

FightComments.propTypes = {
    comments: PropTypes.array.isRequired,
}

export default FightComments;
