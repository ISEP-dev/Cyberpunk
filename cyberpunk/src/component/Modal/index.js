import PropTypes from "prop-types";

const Modal = ({title, description, icon, cancelButton, okButton, visibility, onSubmit, onClose, isSubmitDisabled}) => (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${visibility ? "block" : "hidden"}`}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"/>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-gray-900 text-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <span className="absolute top-0 right-0 text-2xl cursor-pointer pt-1 pr-4"
                              title="Close" onClick={onClose}>&times;</span>
                   <div className="flex items-center">
                       <div className="mx-auto flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 text-gray-900">
                           {icon}
                       </div>
                       <h3 className="ml-3 text-lg leading-6 font-medium" id="modal-headline">{title}</h3>
                   </div>
                    <div className="mt-4">{description}</div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-900">
                    <button type="button" onClick={onSubmit} disabled={isSubmitDisabled}
                            className={`${!isSubmitDisabled ? "hover:bg-blue-600 focus:outline-none bg-blue-400 text-white" : "bg-gray-200 text-gray-600 pointer-events-none"} w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium sm:ml-3 sm:w-auto sm:text-sm`}>
                        {okButton}
                    </button>
                    <button type="button" onClick={onClose}
                            className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 hover:bg-white text-base font-medium hover:text-gray-800 text-white focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        {cancelButton}
                    </button>
                </div>
            </div>
        </div>
    </div>
)

Modal.defaultProps = {
    icon: <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>,
    okButton: "Ok",
    cancelButton: "Annuler",
    visibility: false,
    isSubmitDisabled: false
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.any,
    icon: PropTypes.any,
    okButton: PropTypes.string.isRequired,
    cancelButton: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isSubmitDisabled: PropTypes.bool,
}

export default Modal
