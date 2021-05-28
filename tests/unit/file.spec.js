import { shallowMount } from '@vue/test-utils'
import File from '@/components/File.vue'

describe('File.vue', () => {
  it('renders props when passed', () => {
    const version = 'version'
    const name = 'name'
    const date = 'version'
    const fileType = 'fileType'
    const fileSize = 'fileSize'
    const url = 'url'
    const type = 'type'

    const wrapper = shallowMount(File, {
      propsData: {
        message: {
          version: version,
          name: name,
          date: date,
          file: {
            type: fileType,
            size: fileSize
          },
          url: url,
          type: type
        }
      }
    })

    expect(wrapper.vm.$props.message.version).toBe(version)
    expect(wrapper.vm.$props.message.name).toBe(name)
    expect(wrapper.vm.$props.message.date).toBe(date)
    expect(wrapper.vm.$props.message.file.type).toBe(fileType)
    expect(wrapper.vm.$props.message.file.size).toBe(fileSize)
    expect(wrapper.vm.$props.message.url).toBe(url)
    expect(wrapper.vm.$props.message.type).toBe(type)
  })
})