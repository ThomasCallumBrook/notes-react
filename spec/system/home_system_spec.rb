require "rails_helper"
RSpec.describe "Notes", :type => :system do
  it "loads the homepage as expected", js: true do
    visit '/'
    find('#note-content').native.clear
    find('#note-title').native.clear
    find('#note-tags').native.clear
    fill_in('title', with: "John's note")
    fill_in('tags', with: '#John')
    fill_in('content', with: 'John lives a boring life')
    click_button 'Save'
    expect(page).to have_css('.child')
    take_screenshot
  end

  it "adds a note summary on save", js: true do
    visit '/'
    find('#note-content').native.clear
    find('#note-title').native.clear
    find('#note-tags').native.clear
    fill_in('title', with: "John's note")
    fill_in('tags', with: '#John')
    fill_in('content', with: 'John lives a boring life')
    click_button 'Save'
    expect(page).to have_css('.child')
    take_screenshot
  end

  it "makes a current note on note summary click"
    visit '/'
    find('#note-content').native.clear
    find('#note-title').native.clear
    find('#note-tags').native.clear
    fill_in('title', with: "John's note")
    fill_in('tags', with: '#John')
    fill_in('content', with: 'John lives a boring life')
    click_button 'Save'
    expect(page).to have_css('.child')
    take_screenshot
  end
end
