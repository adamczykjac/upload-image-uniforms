import SimpleSchema2 from 'simpl-schema';
import CustomField from '../components/ui/ImageField'

const sampleSchema = new SimpleSchema2({
    size: {
        type: String,
        defaultValue: 'm',
        allowedValues: ['xs', 's', 'm', 'l', 'xl']
    },

    custom: {
        type: String,
        defaultValue: 1,
        uniforms: CustomField
    }
})

export default sampleSchema;
