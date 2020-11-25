json.key_format! camelize: :lower
json.extract! user, :id, :email, :first_name, :last_name

json.current_meditation user.current_meditation
